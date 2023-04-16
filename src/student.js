/**
 * A class representing a student.
 * @class
 */
class Student {
  /**
   * Create a student object.
   * @constructor
   * @param {string} nama - The name of the student.
   * @param {number} nim - The NIM (student ID) of the student.
   * @param {string | number} kelas - The class of the student.
   */
  constructor(nama = '', nim = 0, kelas = '') {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
  }

  /**
   * Set the name of the student.
   * @param {string} nama - The new name of the student.
   */
  setNama(nama) {
    this.nama = nama;
  }

  /**
   * Get the name of the student.
   * @returns {string} The name of the student.
   */
  getNama() {
    return this.nama;
  }

  /**
   * Set the NIM (student ID) of the student.
   * @param {number} nim - The new NIM of the student.
   */
  setNim(nim) {
    this.nim = nim;
  }

  /**
   * Get the NIM (student ID) of the student.
   * @returns {number} The NIM of the student.
   */
  getNim() {
    return this.nim;
  }

  /**
   * Set the class of the student.
   * @param {string | number} kelas - The new class of the student.
   */
  setKelas(kelas) {
    this.kelas = kelas;
  }

  /**
   * Get the class of the student.
   * @returns {string | number} The class of the student.
   */
  getKelas() {
    return this.kelas;
  }

  /**
   * Get all the properties of the student as an object.
   * @returns {Object} An object containing the properties of the student.
   */
  getAllProperty() {
    return {
      nama: this.getNama(),
      nim: this.getNim(),
      kelas: this.getKelas(),
    };
  }
}

module.exports = Student;
