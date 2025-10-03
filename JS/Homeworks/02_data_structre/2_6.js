const subjects = {
  subjects: "Математика,Физика,Химия,Биология,История",
  AddSubject: function(subjects_name) {
    let arr = this.subjects.split(',');
    if (!arr.includes(subjects_name)) {
      arr.push(subjects_name);
      this.subjects = arr.join(',');
    }
  },
  RemoveSubject: function(subjects_name) {
    let arr = this.subjects.split(',');
    let idx = arr.indexOf(subjects_name);
    if (idx !== -1) {
      arr.splice(idx, 1);
      this.subjects = arr.join(',');
    }
  }
};
