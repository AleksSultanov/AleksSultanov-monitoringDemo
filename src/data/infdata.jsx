let SucssesDate = new Date();
let ErrorDate = new Date();
let o_data = {};
let h = SucssesDate.getHours();
for (let i = 1; i < 7; i++) {
  SucssesDate.setHours(h - (7 - i));
  o_data[SucssesDate.getHours() + ":00"] = 0;
}
SucssesDate.setHours(h);
let cur = h + ":00";
let nibbd_succes = {};
let nibbdBM_succes = {};
let nibbdK2_succes = {};
let ebp_succes = {};
let gcp_succes = {};
let pf_succes = {};
let max_error = {};
let ebp_error = {};
let pf_error = {};
let min_error = {};
Object.keys(o_data).forEach(function (key, index) {
  nibbd_succes[key] = index * (SucssesDate.getSeconds() + 50);
  nibbdBM_succes[key] = index * (SucssesDate.getSeconds() + 40);
  nibbdK2_succes[key] = index * (SucssesDate.getSeconds() + 38);
  gcp_succes[key] = index * (SucssesDate.getSeconds() + 30);
  ebp_succes[key] = index * (SucssesDate.getSeconds() + 10);
  pf_succes[key] = index * 1;
  max_error[key] = index * (SucssesDate.getSeconds() + 10);
  min_error[key] = index * 1;
  pf_error[key] = 1;
  ebp_error[key] = index * 1;
});

ErrorDate.setHours(h - 2);

min_error[cur] = 0;
max_error[cur] = 800;

const infNIBBD = {
  id: 1,
  level: "i",
  name: "НИББД ФЛ",
  dscr: "",
  success: nibbd_succes,
  error: min_error,
  sucsses_last_dt: SucssesDate.toLocaleString("ru-RU"),
  error_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_tr_last_dt: ErrorDate.toLocaleString("ru-RU"),
};

ebp_succes[cur] = 0;
ebp_error[cur] = 80;
const errEBP = {
  id: 2,
  level: "e",
  name: "ЕБП",
  dscr: "Отрицательные ответы",
  success: ebp_succes,
  error: ebp_error,
  sucsses_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_last_dt: SucssesDate.toLocaleString("ru-RU"),
  error_tr_last_dt: "",
};

nibbd_succes[cur] = 0;
const errtrbrNIBBD = {
  id: 3,
  level: "w",
  name: "НИББД ЮЛ",
  dscr: "Технический перерыв в системе НИББД",
  success: nibbd_succes,
  error: max_error,
  sucsses_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_tr_last_dt: SucssesDate.toLocaleString("ru-RU"),
};

const infGCP = {
  id: 4,
  level: "i",
  name: "ГЦП Электронное правительство",
  dscr: "",
  success: gcp_succes,
  error: min_error,
  sucsses_last_dt: SucssesDate.toLocaleString("ru-RU"),
  error_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_tr_last_dt: ErrorDate.toLocaleString("ru-RU"),
};

const infK2 = {
  id: 6,
  level: "i",
  name: "Переводы остатков по К2",
  dscr: "",
  success: nibbdK2_succes,
  error: min_error,
  sucsses_last_dt: SucssesDate.toLocaleString("ru-RU"),
  error_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_tr_last_dt: ErrorDate.toLocaleString("ru-RU"),
};
pf_error[cur] = 8;
const infPF = {
  id: 7,
  level: "w",
  name: "Пенсионный фонд",
  dscr: "Транспортная ошибка",
  success: pf_succes,
  error: pf_error,
  sucsses_last_dt: SucssesDate.toLocaleString("ru-RU"),
  error_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_tr_last_dt: ErrorDate.toLocaleString("ru-RU"),
};

const infBMNIBBD = {
  id: 8,
  level: "e",
  name: "НИББД BANKMAIL",
  dscr: "Задержка в обработки входящих сообщений",
  success: nibbdBM_succes,
  error: o_data,
  sucsses_last_dt: SucssesDate.toLocaleString("ru-RU"),
  error_last_dt: ErrorDate.toLocaleString("ru-RU"),
  error_tr_last_dt: ErrorDate.toLocaleString("ru-RU"),
  sucsses_proc_last_dt: ErrorDate.toLocaleString("ru-RU"),
};

export const infData = [
  infNIBBD,
  errtrbrNIBBD,
  errEBP,
  infGCP,
  infK2,
  infPF,
  infBMNIBBD,
];
