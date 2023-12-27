const FtpDeploy = require('ftp-deploy')

const ftpDeploy = new FtpDeploy()

const config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASS,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: `${__dirname}/../public/`,
  remoteRoot: '/',
  include: ['*'],
}

ftpDeploy.deploy(config, (err) => {
  if (err) {
    console.log(err)
    throw new Error(err)
  } else {
    console.log('finished')
  }
})