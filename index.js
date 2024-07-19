let total = document.querySelector("#total");

let started = new Date().toISOString().split("T")[0];
start_date.value = started;
start_date.min = started;

let Nextformat = new Date();
Nextformat.setDate(Nextformat.getDate() + 1);
let Next = Nextformat.toISOString().split("T")[0];
end_date.value = Next;
end_date.min = Next;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

function CalcPrice() {
  let CalcDays = Math.abs(new Date(end_date.value) - new Date(start_date.value));
  let Formatcalc = Math.ceil(CalcDays / (1000 * 60 * 60 * 24));
  total.textContent = Formatcalc * nightPrice.textContent;
}
start_date.addEventListener("change", () => CalcPrice());
end_date.addEventListener("change", () => CalcPrice());
