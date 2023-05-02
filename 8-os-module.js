const os = require('os')

// info about the current user

const user = os.userInfo()
console.log(user)

// {
//     uid: 501,
//     gid: 20,
//     username: 'harikapenukonda',
//     homedir: '/Users/harikapenukonda',
//     shell: '/bin/zsh'
//   }

// method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`) // The system uptime is 18929 seconds

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)

// {
//     name: 'Darwin',
//     release: '19.0.0',
//     totalMem: 4294967296,
//     freeMem: 43667456
//   }