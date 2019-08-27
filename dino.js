
console.log('dinos');
/*
const dinosaurs = [
  {
    dinoType: 't-rex',
    name: 'wrex',
  },
  {
    dinoType: 'stegosaurus',
    name: 'steve',
  },
  {
    dinoType: 'velociraptor',
    name: 'Ted',
  }
];

const dinoPrinter = (dinosaurs) => {
  for (let i = 0; i < dinosaurs.length; i++) {
      const stringToPrint = `
          <div class="dino-card">
              <h3>dino type</h3>
              <p>dino name</p>
              <h1>emoji</h1>
          </div>
      `
      printToDom(stringToPrint, 'dino-div')
  }
}

dinoPrinter();
*/

// Assignment Viewer

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint
}


const assignments = [
  {
    title: 'Course 1',
    dueDate: '9/25/2019',
    topic: 'Front End Web Development',
    notes: 'Learn to code websites using HTML, CSS and Javascript.',
    assignmentUrl: 'https://teamtreehouse.com/library/introduction-to-html-and-css'
  },
  {
    title: 'Course 2',
    dueDate: '10/25/2019',
    topic: 'Full Stack Javascript',
    notes: 'Learn Javascript, jQuery, Node.js and Gulp to become a professional Javascript developer.',
    assignmentUrl: 'https://teamtreehouse.com/tracks/full-stack-javascript'
  },
  {
    title: 'Course 3',
    dueDate: '11/25/2019',
    topic: 'Beginning C#',
    notes: 'Learn the C# programming language and th .NET framework.',
    assignmentUrl: 'https://teamtreehouse.com/tracks/beginning-c'
  },
  {
    title: 'Course 4',
    dueDate: '12/25/2019',
    topic: 'Beginning ASP.NET',
    notes: 'Learn how to develop web applications using C# and ASP.NET MVC.',
    assignmentUrl: 'https://teamtreehouse.com/tracks/beginning-aspnet'
  },
  {
    title: 'Course 5',
    dueDate: '1/25/2020',
    topic: 'Beginning SQL',
    notes: 'Learn the basics of SQL language for communicating with relational databases.',
    assignmentUrl: 'https://teamtreehouse.com/tracks/beginning-sql'
  }
];



  


  const assignmentToPrint = (lesson) => {
    for (let i=0; i < lesson.length; i++) {
        const lessonAssigned = lesson[i];
        const lessonToDo = `
        <div class='assignment-card'>
            <h3>${lessonAssigned.title}</h3>
            <p>${lessonAssigned.dueDate}</p>
            <p>${lessonAssigned.topic}</p>
            <p>${lessonAssigned.notes}</p>
            <p>${lessonAssigned.assignmentURL}</p>
        </div>
        `
        printToDOM(lessonToDo, 'lessons');
    }
}

assignmentToPrint(assignments);















