import * as yup from 'yup';

export let RegisterSchema = yup.object({
  fullname: yup.string().required('Fullname boş ola bilməz'),
  username: yup.string().required('İstifadəçi adı boş ola bilməz'),
  email: yup.string().email('E-poçt formatı düzgün deyil').required('E-poçt mütləqdir'),
  password: yup.string().required('Şifrə boş ola bilməz'),
  passwordRepeate: yup
    .string()
    .required('Şifrə təkrar mütləqdir')
    .oneOf([yup.ref('password')], 'Şifrələr eyni deyil'),
});
