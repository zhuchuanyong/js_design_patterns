@testable
class MyTestableClass {
    // ...
}
function testable(target: any) {
    target.isTestable = true;
}
MyTestableClass.isTestable; // true
