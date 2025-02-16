document.addEventListener('DOMContentLoaded', function() {
    // Load existing data from localStorage when the page loads
    loadAttendanceData();
    
    document.getElementById('attendance-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const date = document.getElementById('date').value;
        const name = document.getElementById('name').value;
        const status = document.getElementById('status').value;
        const participation = document.getElementById('participation').value;
        const notes = document.getElementById('notes').value;
        
        // Save the new entry to localStorage
        saveAttendanceEntry(date, name, status, participation, notes);
        
        // Add the new entry to the table
        addRowToTable(date, name, status, participation, notes);
        
        // Reset the form
        document.getElementById('attendance-form').reset();
    });
});

function loadAttendanceData() {
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    
    attendanceData.forEach(entry => {
        addRowToTable(entry.date, entry.name, entry.status, entry.participation, entry.notes);
    });
}

function saveAttendanceEntry(date, name, status, participation, notes) {
    const entry = { date, name, status, participation, notes };
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    attendanceData.push(entry);
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
}

function addRowToTable(date, name, status, participation, notes) {
    const table = document.getElementById('attendance-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    
    cell1.innerHTML = date;
    cell2.innerHTML = name;
    cell3.innerHTML = status;
    cell4.innerHTML = participation;
    cell5.innerHTML = notes;
}
