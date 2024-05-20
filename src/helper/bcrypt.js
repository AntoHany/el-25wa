import bcrypt from "bcryptjs" ;

function CheckDataIsValid({name, password}){

  const hashName = '$2a$10$zZhulo0CAiqHjy0ucwKZW.7JUqLie98JZIHY.FD7xcUvqmskbuL4i';
  
  const hashPass = '$2a$10$A/T9ogqKZEeJEu/wWlsYCOt.lD51NNC8REhN9Kj/0Xq5/wqASwKxm';

  let compareName = bcrypt.compareSync(name, hashName);
  let comparePass = bcrypt.compareSync(password, hashPass);
  
  if (compareName && comparePass){
    return true
  }
  return false;
}
export default CheckDataIsValid;