interface Department {
  id: number;
  name: string;
  expanded: boolean;
  selected?: boolean;
  subDepartments?: SubDepartment[];
}

interface SubDepartment {
  id: number;
  name: string;
  selected?: boolean; 
}

export const departmentsData:Department[] = [
  {
    id: 1,
    name: "Engineering",
    expanded: false,
    selected: false,
    subDepartments: [
      { id: 11, name: "Platform" },
      { id: 12, name: "Infrastructure" },
      { id: 13, name: "Infrastructure-11" },
      { id: 14, name: "Infrastructure-15" },
      { id: 14, name: "Infrastructure-20" },
    ],
  },
  {
    id: 2,
    name: "Human Resources",
    expanded: false,
    selected: false,
    subDepartments: [
      { id: 21, name: "Recruitment" },
      { id: 22, name: "Operations" },
    ],
  },
];
