//
let companyDetails = {
  companyName:'JAFS',
  employes:[
    {name:'Anto'},
    {name:'Franklin'},
  ]
};

// let newDetails = companyDetails;
let newDetails = {...companyDetails};

 console.log('Before update', companyDetails)
 console.log('Before update', newDetails)
 
 companyDetails.companyName='AJFS';
 companyDetails.employes[0].name='anto1';
 
 console.log('After update',companyDetails)
 console.log('After update',newDetails)  // while print this using spread operator company name is primitive type so it do deep copy ,
 //  employes is refernce type it keep aray so it do shallow copy

