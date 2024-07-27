const BuggyComponent = () => {
  // This error is thrown intentionally to demonstrate the error boundary
  throw new Error('I crashed!');
};

export default BuggyComponent;
