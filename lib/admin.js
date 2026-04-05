// Simple localStorage-based data layer for admin panel
const ADMIN_KEY = (name) => `dub-admin-${name}`;

export const storage = {
  get(name, fallback = []) {
    if (typeof window === 'undefined') return fallback;
    try {
      const raw = localStorage.getItem(ADMIN_KEY(name));
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  set(name, value) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(ADMIN_KEY(name), JSON.stringify(value));
  },
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },
};

// Notifications
export const getNotifications = () => storage.get('notifications', [
  { id: 'demo1', date: '2026-04-05', title: 'Monthly assessment begins next week', desc: 'All students are informed to prepare for the monthly assessment starting from next Monday.', urgent: true },
  { id: 'demo2', date: '2026-04-01', title: 'Guest lecture by Mufti Sahib on Friday', desc: 'A guest lecture will be delivered by Mufti Sahib after Asr prayer in the main prayer hall.', urgent: false },
  { id: 'demo3', date: '2026-03-25', title: 'Ramadan schedule update', desc: 'The daily schedule for Ramadan has been updated. Please check the new timetable at the office.', urgent: false },
]);
export const saveNotifications = (data) => storage.set('notifications', data);

// Students
export const getStudents = () => storage.get('students', [
  { id: 'STU001', name: 'Abdul Qadir', studentId: 'DUB-2025-001', program: 'Hifz Program', year: '2023', phone: '9419018978', status: 'Active' },
  { id: 'STU002', name: 'Ahmadullah Khan', studentId: 'DUB-2025-002', program: 'Alim Course', year: '2024', phone: '7006774464', status: 'Active' },
  { id: 'STU003', name: 'Muhammad Farhan', studentId: 'DUB-2025-003', program: 'Qirat Program', year: '2023', phone: '7780969812', status: 'Active' },
]);
export const saveStudents = (data) => storage.set('students', data);

// Attendance (by student ID)
export const getAttendance = () => storage.get('attendance');
export const saveAttendance = (data) => storage.set('attendance', data);

// Grades (by student ID)
export const getGrades = () => storage.get('grades');
export const saveGrades = (data) => storage.set('grades', data);

// Admissions
export const getAppointments = () => storage.get('appointments', []);
export const saveAppointments = (data) => storage.set('appointments', data);

// Contact info
export const defaultContact = {
  phone1: '0194-2420536',
  phone2: '9419018978',
  phone3: '7006774464',
  phone4: '7780969812',
  address: 'Ahmada Kadal, Lal Bazar & Ashrafabad, Khimber, Srinagar',
};
export const getContactInfo = () => storage.get('contact', defaultContact);
export const saveContactInfo = (data) => storage.set('contact', { ...defaultContact, ...data });

// Dashboard stats
export const defaultStats = {
  totalStudents: 875,
  totalTeachers: 72,
  totalStaff: 38,
  yearsOfService: 36,
  huffazGraduated: 583,
  qurraGraduated: 150,
  ulamaGraduated: 193,
  muftiGraduated: 92,
  expenditureMonthly: 4000,
  expenditureYearly: 48000,
};
export const getSiteStats = () => storage.get('stats', defaultStats);
export const saveSiteStats = (data) => storage.set('stats', { ...defaultStats, ...data });
