/*
 মনে করো  একটা Array  ভিতরে এলিমেন্ট হিসেবে object থাকবে। তোমার কাজ হচ্ছে একটা ফাংশন লেখা যে ফাংশনের কাজ হচ্ছে কোন একটা Array কে সে ইনপুট হিসেবে নিবে সেই Array ভিতরে object থাকলে সেই objectের প্রপার্টি ও ভ্যালুকে এক্সেস করে তা array আকারে পাঠাবে। 
*/

const persons = [
  {
    name: "poly",
    age: "20",
  },
  {
    name: "dipu",
    age: "23",
  },
  {
    name: "robin",
    age: "23",
  },
];

function objectAccess(persons) {
  const values = [];
  //Step 1:  Array এর ভিতরের প্রতিটা এলিমেন্ট লুপ করে ধরতে হবে।
  for (let i = 0; i < persons.length; i++) {
    let text = "";
    const element = persons[i];
    //Step 2: এখানে প্রতিটা এলিমেন্ট হচ্ছে object.এবার object এ লুপ চালিয়ে প্রোপার্টি আর ভ্যালু এক্সেস করতে হবে
    for (let property in element) {
      text = text + property + " : " + element[property] + ", ";
    }
    console.log(text)
    values.push(text);
  }

  return values;
}

console.log(objectAccess(persons));

let text = "hi ";

text += "hello";

text = text + "hello "

console.log(text);
