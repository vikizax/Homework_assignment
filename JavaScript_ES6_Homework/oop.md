Object Oriented Programming:
    
    OOP involves the use of classes and objects to design the program.

    For Example:
    We need  blueprint before building a house.
    This blueprint includes all the construction specifications 
    of a residential house such as dimensions, materials, layouts,
    installation methods and techniques.
    
    Here blueprint is a class and house is an object

    "Class is a place where the behaviour of the object is defined.
    And object is the instance of a class to implement it in the real world."

    OOP is used because we can define the behaviour of the object in one place "class" and
    all the object created from it will have the included behaviour.
    It helps to reduce the complexity and also improves the maintainability of the system.
    OOP pattern would be a better solution, when we want to have multiple objects with same behaviour.


Example: school-management system(simplified version)

object:
- Student
        - inlcudes student_id_no, name, contact details, ..any
- Teacher
        - includes teacher_id_no, name, contact details, ..any

User Stories:

    When new student enrolls:
    -id_no, name , and contact_no will be saved
    When new teaher is hired:
    -id_no, name, and contact_no will be saved

    Employess using the application will add the student/teacher details in the GUI provided
    and program behind the scene will create an object for each student/teacher and will save it.

    Later if any modfication is needed, say contact details need to be changed, Employee can Update the details from the GUI and this change will be affected to the particular object.

Pseudocode
    
    super class
    class Person{
        it will have
        first name, last name and contact_no field
    }

    class Student will inherit from Person {
        it will include super class fields plus
        student_id_no field
    }

    class Teacher will inherit from Person {
        it will inculde super class field plus
        teacher_id_no field
    }

    create object:
    teacher1 = object of Teacher('firstName', 'lastName', 'contactNo', 'id');
    student1 = object of Student('firstName', 'lastName', 'contactNo', 'id');

    update:
    student1.ContactNo = new contact number
    teacher1.ContactNo = new contact number
    Save the changes

    