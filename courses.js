const aCourse = {
    code: "CSE121b",
    name: "JavaScript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
  
    // Method to handle both enrolling and dropping students
    changeEnrollment: function (sectionNum, add = true) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
  
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++; // Increase enrolled students
        } else {
          if (this.sections[sectionIndex].enrolled > 0) {
            this.sections[sectionIndex].enrolled--; // Decrease enrolled students only if > 0
          }
        }
        renderSections(this.sections);
      }
    },
  };
  
  function setCourseInfo(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections
      .map(
        (section) => `<tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>`
      )
      .join("");
    document.querySelector("#sections").innerHTML = html;
  }
  
  // Event Listeners
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, true);
  });
  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
  
  // Initialize page with course details
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);
  