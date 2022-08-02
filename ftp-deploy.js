const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

console.log(process);

const config = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    user: process.env.FTP_USERNAME,
    // Password optional, prompted if none given
    password: process.env.FTP_PASSWORD,
    localRoot: __dirname + "/public",
    remoteRoot: process.env.FTP_REMOTE,
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        "dist/**/*.map",
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**",
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err)); 