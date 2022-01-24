//Данный скрипт генерирует ключ и протокол для HTTPS-соединения

// This script sets up HTTPS for the application using the ASP.NET Core HTTPS certificate
const fs = require('fs'); // подлючает модуль для работы с файловой системой
const spawn = require('child_process').spawn; // подключает модуль для создания новый процессов, которым можно передат аргументы командной строки
const path = require('path'); //модуль для работы с директориями и папками

/**
 * В этой папке валяется сертификат.
 * На моей машине находится по адресу C:\Users\User_name\AppData\Roaming\ASP.NET\https
 * Если доступна папка AppData, то использует ее как папку для хранения сертификата, в противном случае, используем текущуий каталог.
 */
const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ''
    ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;


/**Содержит первый аргумент --name=, который добавляет сертификату имя
 * 
 * 
 * process.argv - список аргументов командной строки, переданной в процесс
 * process.argv.map() - применяет к каждому вхождению анонимную функцию
 * arg.match(str: string) - находит вхождения в строку по шаблону и возвращает список найденных вхождений
 * filter(Boolean) - убирает значения из массива, которые можно приравнять к false (null or empty string)
 * А потом возвращаем первое вхождение*/
const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];

/**Создает имя для сертификата.
 * Если certificateArg не пустой, то имя сертификата будет взято из аргумента - certificateArg.groups.value,
 * в противном случая, из названия пакета (process.env.npm_package_name)
 * */

const certificateName = certificateArg ? certificateArg.groups.value : process.env.npm_package_name;

/*Если имя сертификату не было присвоено, то выводим на консоль сообщение об ошибке (console.error()) 
 * и завершаем процесс с кодом -1 (process.exit(-1))**/

if (!certificateName) {
  console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.')
  process.exit(-1);
}


// генерируем путь до сертификата при помощи команды path.join()
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

//при помощи методы fs.existsSync(path: string) проверяем, существует ли уже файлы сертификата
// если хотя бы один не существует, то запускаем новый процесс, которому передаем аргументы dotNet CLI, который генерирует https-сертификаты
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  spawn('dotnet', [
    'dev-certs',
    'https',
    '--export-path',
    certFilePath,
    '--format',
    'Pem',
    '--no-password',
  ], { stdio: 'inherit', })
  .on('exit', (code) => process.exit(code));
}
