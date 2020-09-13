# Toy Robot Simulator

## Installation and Usage

Make sure that you have Node.js installed.
You can install Node from their website https://nodejs.org/.

cd to the root directory and invoke:

`$ npm install`

Now you can run the application with:

`$ npm start`

You can also run the test suite with:

`$ npm test`

## Design Decisions and Dependencies

This project was developed with a functional approach, avoiding mutation as much as possible with the use of pure, stateless functions. State is only handled within a single location.

A test driven approach was used to develop unit tests parser and action functions using Jest testing framework. The controller function to handle the user input is tested in a more integrative way, focused on the matching the design criteria as a whole.

The project is linted with Prettier, and has a configuration file configured for VS Code IDE.

## Future Considerations

Currently the state is only managed as an object, however, this is would be easily subject to mutation given scale of the project. A state management solution such as Redux would help create immutable state going forward.

User input validation is currently case insensitive, but does not account for empty spaces before and after commands. Perhaps use of a regex validator function could be added as a utility.

---

## Description

- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid
  movement commands must still be allowed.

Create an application that can read in commands of the following form:

    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT

- PLACE will put the toy robot on the table in position X,Y and facing NORTH,
  SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any
  sequence of commands may be issued, in any order, including another PLACE
  command. The application should discard all commands in the sequence until
  a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is
  currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form,
  but standard output is sufficient.

- A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT
  and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

## Constraints

- The toy robot must not fall off the table during movement. This also
  includes the initial placement of the toy robot.
- Any move that would cause the robot to fall must be ignored.

## Example Input and Output

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH
