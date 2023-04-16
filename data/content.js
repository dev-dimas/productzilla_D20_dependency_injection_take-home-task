const content = {
  en: {
    chooseProgram: {
      name: 'program',
      message: 'Select the application that you want to run :',
      choices: ['Geometry App', 'College Student App'],
    },
    chooseGeometryMenu: {
      name: 'geometry',
      message: 'Choose Operation :',
      choices: [
        "Calculate the square's area",
        "Calculate the square's perimeter",
        "Calculate the triangle's area",
        "Calculate the triangle's perimeter",
        "Calculate the circle's area",
        "Calculate the circle's circumference",
      ],
    },
    chooseCollegeStudentMenu: {
      studentName: {
        name: 'name',
        message: 'Name :',
        initial: "Please input the college student's name",
      },
      studentNim: {
        name: 'nim',
        message: 'NIM :',
        initial: "Please input the college student's NIM",
      },
      studentClass: {
        name: 'class',
        message: 'Class :',
        initial: "Please input the college student's class",
      },
    },
    squarePrompt: {
      name: 'sideSquare',
      message: "Please enter the square's side length",
    },
    squareResult: {
      area: 'The area of the square is',
      perimeter: 'The perimeter of the square is',
    },
    trianglePrompt: {
      area: {
        base: {
          name: 'baseTriangle',
          message: "Please enter the triangle's base length",
        },
        height: {
          name: 'heightSquare',
          message: "Please enter the triangle's height",
        },
      },
      perimeter: {
        firstSide: {
          name: 'firstSide',
          message: "Please enter the triangle's first side",
        },
        secondSide: {
          name: 'secondSide',
          message: "Please enter the triangle's second side",
        },
        thirdSide: {
          name: 'thirdSide',
          message: "Please enter the triangle's third side",
        },
      },
    },
    triangleResult: {
      area: 'The area of the triangle is',
      perimeter: 'The perimeter of the triangle is',
    },
    circlePrompt: {
      name: 'radiusCircle',
      message: "Please enter the circle's radius",
    },
    circleResult: {
      area: 'The area of the circle is',
      perimeter: 'The circumference of the circle is',
    },
    studentInformation: {
      message: 'Successfully saving the following college student information',
      name: 'Name :',
      nim: 'NIM :',
      class: 'Class :',
    },
    closePrompt: {
      counting: 'The program will be closed automatically in 3 seconds.',
      message: "Thank you for tryin' this program. Have a nice day :))",
      sign: 'Made with ❤️  by Dimas Maulana',
    },
  },
  id: {
    chooseProgram: {
      name: 'program',
      message: 'Pilih aplikasi yang ingin kamu jalankan :',
      choices: ['Aplikasi Geometri', 'Aplikasi Mahasiswa'],
    },
    chooseGeometryMenu: {
      name: 'geometry',
      message: 'Pilih operasi :',
      choices: [
        'Hitung luas bangun persegi',
        'Hitung keliling bangun persegi',
        'Hitung luas bangun segitiga',
        'Hitung keliling bangun segitiga',
        'Hitung luas bangun lingkaran',
        'Hitung keliling bangun lingkaran',
      ],
    },
    chooseCollegeStudentMenu: {
      studentName: {
        name: 'name',
        message: 'Nama :',
        initial: 'Masukkan nama mahasiswa',
      },
      studentNim: {
        name: 'nim',
        message: 'NIM :',
        initial: 'Masukkan NIM mahasiswa',
      },
      studentClass: {
        name: 'class',
        message: 'Class :',
        initial: 'Masukkan kelas mahasiswa',
      },
    },
    squarePrompt: {
      name: 'sideSquare',
      message: 'Masukkan nilai panjang sisi persegi',
    },
    squareResult: {
      area: 'Luas bangun perseginya adalah',
      perimeter: 'Panjang keliling perseginya adalah',
    },
    trianglePrompt: {
      area: {
        base: {
          name: 'baseTriangle',
          message: 'Masukkan nilai panjang alas segitiga',
        },
        height: {
          name: 'heightSquare',
          message: 'Masukkan nilai tinggi segitiga',
        },
      },
      perimeter: {
        firstSide: {
          name: 'firstSide',
          message: 'Masukkan nilai panjang sisi pertama segitiga',
        },
        secondSide: {
          name: 'secondSide',
          message: 'Masukkan nilai panjang sisi kedua segitiga',
        },
        thirdSide: {
          name: 'thirdSide',
          message: 'Masukkan nilai panjang sisi ketiga segitiga',
        },
      },
    },
    triangleResult: {
      area: 'Luas bangun segitiganya adalah',
      perimeter: 'Panjang keliling segitiganya adalah',
    },
    circlePrompt: {
      name: 'radiusCircle',
      message: 'Masukkan nilai jari jari lingkaran',
    },
    circleResult: {
      area: 'Luas bangun lingkarannya adalah',
      perimeter: 'Panjang keliling lingkarannya adalah',
    },
    studentInformation: {
      message: 'Berhasil menyimpan data mahasiswa sebagai berikut',
      name: 'Nama :',
      nim: 'NIM :',
      class: 'Kelas :',
    },
    closePrompt: {
      counting: 'Program akan tertutup otomatis dalam 3 detik.',
      message: 'Terima kasih telah mencoba program ini. Semoga harimu menyenangkan :))',
      sign: 'Made with ❤️  by Dimas Maulana',
    },
  },
};

module.exports = content;
