import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { departmentsData } from "../../data/departments";



const DepartmentComponent = () => {
  const [departments, setDepartments] = useState(departmentsData);
  console.log("departments", departments);

  const handleToggleDepartment = (departmentId: number | string) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((dept) =>
        dept.id === departmentId ? { ...dept, expanded: !dept.expanded } : dept
      )
    );
  };

  const handleToggleDepartmentSelection = (departmentId: number | string) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((dept) =>
        dept.id === departmentId
          ? {
              ...dept,
              selected: !dept.selected,
              subDepartments: dept?.subDepartments?.map((subDept) => ({
                ...subDept,
                selected: !dept.selected,
              })),
            }
          : dept
      )
    );
  };

  const handleToggleSubDepartmentSelection = (
    departmentId: number | string,
    subDepartmentId: number | string
  ) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((dept) =>
        dept.id === departmentId
          ? {
              ...dept,
              subDepartments: dept?.subDepartments?.map((subDept) =>
                subDept.id === subDepartmentId
                  ? { ...subDept, selected: !subDept?.selected }
                  : subDept
              ),
              selected: dept?.subDepartments?.every((subDept) =>
                subDept.id === subDepartmentId
                  ? !subDept?.selected
                  : subDept.selected
              ),
            }
          : dept
      )
    );
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        border: 2,
        borderColor: "ButtonShadow",
        marginLeft: 2,
      }}
    >
      {departments.map((department) => (
        <React.Fragment key={department.id}>
          <ListItem
            button
            onClick={() => handleToggleDepartment(department.id)}
            sx={{
              borderBottom: "1px solid #ccc",
              "&:last-child": { borderBottom: "none" },
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto", marginRight: 1 }}>
              <Checkbox
                checked={department.selected}
                onChange={() => handleToggleDepartmentSelection(department.id)}
              />
              {department.subDepartments &&
                (department.expanded ? (
                  <ExpandMoreIcon />
                ) : (
                  <ChevronRightIcon />
                ))}
            </ListItemIcon>
            <ListItemText primary={department.name} />
          </ListItem>
          {department.subDepartments && department.expanded && (
            <Collapse in={department.expanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.subDepartments.map((subDept) => (
                  <ListItem key={subDept.id} sx={{ paddingLeft: 4 }}>
                    <ListItemIcon sx={{ minWidth: "auto" }}>
                      <Checkbox
                        checked={subDept?.selected}
                        onChange={() =>
                          handleToggleSubDepartmentSelection(
                            department.id,
                            subDept.id
                          )
                        }
                      />
                    </ListItemIcon>
                    <ListItemText primary={subDept.name} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentComponent;
