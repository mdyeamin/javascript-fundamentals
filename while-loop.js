// basic while loop structure
let i = 0;
while (i < 20) {
  i++;
  console.log(i); // output will be 1-20
}

/* while loop এ  console.log আগে i++ পরে। এবং i++ আগে console.log পরে। এভাবে করে দেখলে 
দেখবেন।
১ম টা রান করলে output আসবে 0-1-2-3...19।
২য় টা রান করলে 1-2-3-4...20।
এখানে while এর মধ্যে condition হচ্ছে i<20 i যদি ছোট হয় 20 থেকে তাহলে while এর মধ্যে ঢুকবে। i<=20 এটা না বলা সত্ত্বেও ২য় টায় কেন 20 পর্যন্ত প্রিন্ট হচ্ছে??
এটার কারন হচ্ছে, while এর মধ্যে যখন চেক করে i < 20 এটা ভিতরে ঢুকবে কারন condition সত্য, i এর initial মান 0 যার ফলে ঢুকার সাথে সাথে ১ বারাইয়া দিবে তখন আর 0 প্রিন্ট হবে না,
 0 থেকে 1 বেরে console.log হবে। এভাবে যখন i এর মান ১৮ পর্যন্ত স্বাভাবিক ভাবে যাবে এরপর i এর মান ১৮ < 20 condition সত্য ,
  ভিতরে যাবে, ভিতরে জাইয়া সাথে সাথে 1 বারাইয়া 19 হয়ে console.log হবে। তারপর i এর মান 19 < 20 condotion সত্য ভিতরে যাবে , জাইয়া আগের মতো 1 বারাইয়া দিবে হয়ে যাবে 20, console.log হবে 20,
পরে যখন i এর মান 20 < 20 condition মিথ্যা তখন loop থেমে যাবে।
i<=20 না লিখেও 20 কে পাওয়া জাচ্ছে ব্যাপারটা মজার। */

// basic while loop odd numbers

let oddNum = 1;
while (oddNum < 20) {
  console.log(oddNum); // output will be 1-3-5-7...19
  oddNum += 2; // you can use "oddNum = oddNum + 2"
}

// basic while loop even numbers
let evenNum = 0;
while (evenNum <= 20) {
  console.log(evenNum); // output will be 0-2-4-6...20
  evenNum += 2;
}

// get array elements in while loop
const items = [
  "laptop",
  "mobail",
  "phone",
  "charger",
  "headphone",
  "keyboard",
  "table",
  "router machine",
];

let getArrayItems = 0;
while (getArrayItems < items.length) {
  const arrayItem = items[getArrayItems];
  console.log(arrayItem);
  getArrayItems++;
}

// basic while loop odd numbers a different way
let differentOddNum = 0;
while (differentOddNum < 20) {
  if (differentOddNum % 2 == 1) {
    console.log(differentOddNum); //output will be 1-3-5-7...19
  }
  differentOddNum++;
}

// basic while loop even numbers a different way

let differentEvenNum = 0;

while (differentEvenNum < 20) {
  if (differentEvenNum % 2 == 0) {
    console.log(differentEvenNum); //output will be 0-2-4-6...18
  }
  differentEvenNum++;
}


/* hey there! now I'm sharing another method to get
 even and odd numbers through while loop */

// even numbers

let anotherEvenNum = 0;
while (anotherEvenNum < 20) {
  if (anotherEvenNum % 2 == !-1) {
    console.log(anotherEvenNum); // output will be 0-2-4-6...18
  }
  anotherEvenNum++;
}

// odd numbers

let anotherOddNum = 0;
while (anotherOddNum < 20) {
  if (anotherOddNum % 2 == !!-1) {
    console.log(anotherOddNum); //output will be 1-3-5-7...19
  }
  anotherOddNum++;
}
