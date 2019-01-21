

var group = {
  title: "Our Group",
  students: [['John', 50],['Pete', 20], ['Alice', 10]],
  score: []
};

const showList = arr => {
  arr.students.forEach(
    
    student => console.log(this.title + ': ' + student)
  );
}

showList(group);
