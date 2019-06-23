const mockMail = [
    {
        subject: "My first email",
        receiver: "test@test.com",
        content: "This is my first email"
    },
    {
        subject: "My first email",
        receiver: "test@test.com",
        content: "This is my first email"
    },
    {
        subject: "My first email",
        receiver: "test@test.com",
        content: "This is my first email"
    }
];

module.exports = {
 Query: {
     mails : () => {
         return mockMail;
     },
     mail : (_, { subject, receiver }) => {
         return {
             subject,
             receiver,
             content: "This is some content"
         }
     }
 },
 Mutation: {
    mail : (_, args) => {
        mockMail[0] = args;
        return args;
    }
 }
};