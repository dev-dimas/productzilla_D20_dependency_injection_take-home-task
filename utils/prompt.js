const { Input, Select, NumberPrompt } = require('enquirer');

const program = async (content, calculateGeometry, Student, closePrompt) => {
  const { areaSquare, perimeterSquare, areaTriangle, perimeterTriangle, areaCircle, circumferenceCircle } = calculateGeometry;
  const promptChooseProgram = async (prompt = content.chooseProgram) => {
    try {
      const choosedProgram = await new Select(prompt).run();
      if (choosedProgram === prompt.choices[0].name) {
        promptGeometryProgram();
      } else if (choosedProgram === prompt.choices[1].name) {
        promptCollegeStudentProgram();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const promptGeometryProgram = async (prompt = content.chooseGeometryMenu) => {
    try {
      const choosedGeometryMenu = await new Select(prompt).run();

      switch (choosedGeometryMenu) {
        case prompt.choices[0].name:
          promptAreaSquare();
          break;

        case prompt.choices[1].name:
          promptPerimeterSquare();
          break;

        case prompt.choices[2].name:
          promptAreaTriangle();
          break;

        case prompt.choices[3].name:
          promptPerimeterTriangle();
          break;

        case prompt.choices[4].name:
          promptAreaCircle();
          break;

        case prompt.choices[5].name:
          promptCircumferenceCircle();
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const promptCollegeStudentProgram = async (prompt = content.chooseCollegeStudentMenu) => {
    try {
      const studentInstance = new Student();

      const studentName = await new Input(prompt.studentName).run();
      studentInstance.setNama(studentName);

      const studentNim = await new Input(prompt.studentNim).run();
      studentInstance.setNim(parseInt(studentNim));

      const studentClass = await new Input(prompt.studentClass).run();
      studentInstance.setKelas(studentClass);

      console.log(content.studentInformation.message);
      console.log(`${content.studentInformation.name} ${studentInstance.getNama()}`);
      console.log(`${content.studentInformation.nim} ${studentInstance.getNim()}`);
      console.log(`${content.studentInformation.class} ${studentInstance.getKelas()}`);
      await closePrompt();
    } catch (error) {
      console.error(error);
    }
  };

  const promptAreaSquare = async (prompt = content.squarePrompt) => {
    const squareSide = await new NumberPrompt(prompt).run();
    console.log(`${content.squareResult.area} ${areaSquare(squareSide)}`);
    await closePrompt();
  };

  const promptPerimeterSquare = async (prompt = content.squarePrompt) => {
    const squareSide = await new NumberPrompt(prompt).run();
    console.log(`${content.squareResult.perimeter} ${perimeterSquare(squareSide)}`);
    await closePrompt();
  };

  const promptAreaTriangle = async (prompt = content.trianglePrompt) => {
    const triangleBase = await new NumberPrompt(prompt.area.base).run();
    const triangleHeight = await new NumberPrompt(prompt.area.height).run();
    console.log(`${content.triangleResult.area} ${areaTriangle(triangleBase, triangleHeight)}`);
    await closePrompt();
  };

  const promptPerimeterTriangle = async (prompt = content.trianglePrompt) => {
    const firstSide = await new NumberPrompt(prompt.perimeter.firstSide).run();
    const secondSide = await new NumberPrompt(prompt.perimeter.secondSide).run();
    const thirdSide = await new NumberPrompt(prompt.perimeter.thirdSide).run();
    console.log(`${content.triangleResult.perimeter} ${perimeterTriangle(firstSide, secondSide, thirdSide)}`);
    await closePrompt();
  };

  const promptAreaCircle = async (prompt = content.circlePrompt) => {
    const radius = await new NumberPrompt(prompt).run();
    console.log(`${content.circleResult.area} ${areaCircle(radius)}`);
    await closePrompt();
  };

  const promptCircumferenceCircle = async (prompt = content.circlePrompt) => {
    const radius = await new NumberPrompt(prompt).run();
    console.log(`${content.circleResult.perimeter} ${circumferenceCircle(radius)}`);
    await closePrompt();
  };

  await promptChooseProgram();
};

module.exports = program;
