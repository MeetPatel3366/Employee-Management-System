const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "1@emp.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Verify the stock levels for fresh produce.",
        date: "2025-01-10",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Clean Station",
        description: "Ensure the counter and utensils are clean.",
        date: "2025-01-11",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Customer Order",
        description: "Handle order #1234 for Table 5.",
        date: "2025-01-12",
        category: "Service",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Suman",
    email: "2@emp.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        title: "Prepare Ingredients",
        description: "Chop vegetables for the lunch service.",
        date: "2025-01-13",
        category: "Preparation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Train New Staff",
        description: "Guide the new kitchen helper on protocols.",
        date: "2025-01-14",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "3@emp.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Equipment Check",
        description: "Test the functionality of the oven.",
        date: "2025-01-15",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Staff Briefing",
        description: "Attend the daily meeting with management.",
        date: "2025-01-16",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Handle Complaint",
        description: "Address customer feedback about order #5678.",
        date: "2025-01-17",
        category: "Service",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Arjun",
    email: "4@emp.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Prepare Order",
        description: "Package order #789 for delivery.",
        date: "2025-01-18",
        category: "Delivery",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Inventory Update",
        description: "Log new inventory items into the system.",
        date: "2025-01-19",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Meena",
    email: "5@emp.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Assist Chef",
        description: "Support the head chef during peak hours.",
        date: "2025-01-20",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Clean Kitchen",
        description: "Deep clean the kitchen area after closing.",
        date: "2025-01-21",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Quality Check",
        description: "Inspect food quality before serving.",
        date: "2025-01-22",
        category: "Quality Assurance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    // console.log(employees,admin);

    return {employees,admin}
}