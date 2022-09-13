require('dotenv').config()

module.exports = [

  {
    name: 'Simon Data',
    email: 'ernesto@simondata.com',
    token: process.env.SLACK_TOKEN,
    zoomVerificationToken: process.env.VERIFICATION_TOKEN,
    dndNumMinutes: 60,
    meetingStatus: {
      text: "I'm in a meeting",
      emoji: ':zoom:',
    },
    noMeetingStatus: {
      text: '',
      emoji: '',
    },
  },
]
