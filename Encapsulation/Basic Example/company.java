class Employee {
    private init empId;
    public void setEmpId(int eId) {
        empId = eId;
    }
    public int getEmpId() {
        return empId;
    }
}

class company {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.setEmpId(100);
        System.out.println(e.getEmpId());
    }
}