//������ ������ ���������� ���� � �������� ��� HTTPS-����������

// This script sets up HTTPS for the application using the ASP.NET Core HTTPS certificate
const fs = require('fs'); // ��������� ������ ��� ������ � �������� ��������
const spawn = require('child_process').spawn; // ���������� ������ ��� �������� ����� ���������, ������� ����� ������� ��������� ��������� ������
const path = require('path'); //������ ��� ������ � ������������ � �������

/**
 * � ���� ����� �������� ����������.
 * �� ���� ������ ��������� �� ������ C:\Users\User_name\AppData\Roaming\ASP.NET\https
 * ���� �������� ����� AppData, �� ���������� �� ��� ����� ��� �������� �����������, � ��������� ������, ���������� �������� �������.
 */
const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ''
    ? `${process.env.APPDATA}/ASP.NET/https`
        : `${process.env.HOME}/.aspnet/https`;


/**�������� ������ �������� --name=, ������� ��������� ����������� ���
 * 
 * 
 * process.argv - ������ ���������� ��������� ������, ���������� � �������
 * process.argv.map() - ��������� � ������� ��������� ��������� �������
 * arg.match(str: string) - ������� ��������� � ������ �� ������� � ���������� ������ ��������� ���������
 * filter(Boolean) - ������� �������� �� �������, ������� ����� ���������� � false (null or empty string)
 * � ����� ���������� ������ ���������*/
const certificateArg = process.argv.map(arg => arg.match(/--name=(?<value>.+)/i)).filter(Boolean)[0];

/**������� ��� ��� �����������.
 * ���� certificateArg �� ������, �� ��� ����������� ����� ����� �� ��������� - certificateArg.groups.value,
 * � ��������� ������, �� �������� ������ (process.env.npm_package_name)
 * */

const certificateName = certificateArg ? certificateArg.groups.value : process.env.npm_package_name;

/*���� ��� ����������� �� ���� ���������, �� ������� �� ������� ��������� �� ������ (console.error()) 
 * � ��������� ������� � ����� -1 (process.exit(-1))**/

if (!certificateName) {
  console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly.')
  process.exit(-1);
}


// ���������� ���� �� ����������� ��� ������ ������� path.join()
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

//��� ������ ������ fs.existsSync(path: string) ���������, ���������� �� ��� ����� �����������
// ���� ���� �� ���� �� ����������, �� ��������� ����� �������, �������� �������� ��������� dotNet CLI, ������� ���������� https-�����������
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
