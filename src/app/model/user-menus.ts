export class UserMenus {
  public static menus: Array<any> = [
    //index:[0][RE]
    {
      RE: [
        { lable: 'Add Enquiry', path: 'addenq' },
        { lable: 'View Enquiry', path: 'viewenq' },
        { lable: 'Requiest TO Cibil Check', path: 'cibil' },
        { lable: 'Reject Enquiry', path: 'reject' },
        // { lable: 'Create Loan Application', path: 'loanApp' },
        // { lable: 'Send  Mail', path: 'sendMail' },
      ],
      //index:[0][OE]
      OE: [
        { lable: 'Check Cibil', path: 'cibil' },
        { lable: 'Verify Document', path: 'verifyDoc' },
      ],

      CM: [
        { lable: 'Verify Document', path: 'verifyDocc' },
        { lable: 'Genrate Sancation latter', path: 'sancation' },
      ],

      AH: [
        { lable: 'Loan Disbursment', path: 'loanDis' },
        { lable: 'Leadger Management', path: 'leadgerM' },
        { lable: 'Defaulter', path: 'default' },
        { lable: 'Clone Closure', path: 'clone' },
      ],
    },
  ];
}
