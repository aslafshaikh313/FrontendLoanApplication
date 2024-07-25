export class UserMenus {
  public static menus: Array<any> = [
    //index:[0][RE]
    {
      RE: [
        // { lable: 'Add Enquiry', path: 'addenq' },
        { lable: 'View Enquiry', path: 'viewenq' },
        { lable: 'Approved Cibil', path: 'approved' },
        { lable: 'Reject Enquiry', path: 'reject' },
        { lable: 'Document Status', path: 'docStatus' },
        { lable: 'Sanction Status', path: 'sanctionstatus' },
      ],
      //index:[0][OE]
      OE: [
        { lable: 'Check Cibil', path: 'cibil' },
        { lable: 'Customer Verification', path: 'verifyDoc' },
      ],

      CM: [
     //   { lable: 'Verify Document', path: 'verifyDocc' },
        { lable: 'Genrate Sancation latter', path: 'sancation' },
      ],

      AH: [
        { lable: 'Loan Disbursment', path: 'loanDis' },
        { lable: 'Transactions', path: 'transaction' },
        { lable: 'Ledger Management', path: 'ledger' },

        { lable: 'Defaulter', path: 'default' },
      ],
    },
  ];
}
