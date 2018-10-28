export class UserModel {
    uid?: string;
    email?: string;
    phoneNumber?: string;
    role?: number;
    groups?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    nickName?: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    password: string;
    dateOfBirth?: number;
    date: Date;
    emergencyContact: string;
    photoUrl?: string;

    constructor(data) {
        this.uid = data.uid || '';
        this.email = data.email || '';
        this.phoneNumber = data.phoneNumber || '';
        this.role = data.role || '';
        this.groups = data.groups || '';
        this.firstName = data.firstName || '';
        this.middleName = data.middleName || '';
        this.lastName = data.lastName || '';
        this.nickName = data.nickName || '';
        this.streetAddress = data.streetAddress || '';
        this.city = data.city || '';
        this.state = data.state || '';
        this.zipCode = data.zipCode || '';
        this.password = data.password || '';
        this.dateOfBirth = data.dateOfBirth || '';
        this.date = data.date || 0;
        this.emergencyContact = data.emergencyContact || '';
        this.photoUrl = data.photoUrl || '';
    }
}