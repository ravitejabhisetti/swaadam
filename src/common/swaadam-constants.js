export const Swaadam_Started_screen = 'Started';
export const Is_App_Signed_In = 'isAppSignedIn';
export const Swaadam_Home_Screen = 'Home';
export const Montserrat_Regular = 'Montserrat-Regular';
export const Montserrat_Bold = 'Montserrat-Bold';
export const Montserrat_Light = 'Montserrat-Light';
export const Montserrat_Medium = 'Montserrat-Medium';
export const Row = 'row';
export const Center = 'center';
export const Column = 'column';
export const Contain = 'contain';
export const Width_100 = '100%';
export const Black = 'black';
export const Bold = 'bold';
export const Grey = '#616161';
export const Justify = 'justify';
export const Space_Between = 'space-between';
export const Started_Button_yellow = '#FBC02D';
export const White = 'white';
export const Home_Screen = 'Home';
export const User_Sign_In_Screen = 'userSignInScreen';
export const User_OTP_Screen = 'userOtpScreen';
export const User_Update_Details_Screen = 'userUpdateDetailsScreen';
export const None = 'none';
export const Absolute = 'absolute';
export const Swaadam_SignIn_Form_Name = 'SwaadamSignInForm';
export const Swaadam_Update_Details_Form_Name = 'SwaadamUpdateDetailsForm';
export const Swaadam_New_Address_Form_Name = 'SwaadamNewAddressForm';
export const Swaadam_SignIn_Submit_Button = 'REQUEST OTP';
export const Form_Item_Type_Text_Box = 'textBox';
export const Sign_In_Form = 'Sign In';
export const Transparent = 'transparent';
export const Swaadam_Profile_Screen = 'Profile';
export const Form_Button_Underlay_Color = '#C0C0C0';
export const Update_Button = 'Update';
export const Address_Save = 'Save';
export const Mobile_Number_Error = 'Please enter a valid 10 digit mobile number';
export const Submit_Cancel = 'Cancel';
export const Phone_Verification = 'Phone Verification';
export const Method_Get = 'GET';
export const Method_Post = 'POST';
export const Method_Put = 'PUT';
export const Users_Url = 'https://swaadam-b825b.firebaseio.com/users.json';
export const Users_Update = 'https://swaadam-b825b.firebaseio.com/users/';
export const User_Locations_Url = 'https://swaadam-b825b.firebaseio.com/locations.json';
export const Not_Found = 'Not Found';
export const Update_Details_Header = 'Update Details';
export const Name_Error = 'Please Enter a Valid Name';
export const Email_Error = 'Please Enter a Valid Email';
export const Api_Call_Headers = { "Content-Type": "application/json" };
export const User_Details = 'userDetailsInStorage';
export const otpError = 'Please enter a valid Otp';
export const Icon_Grey = '#A0A0A0';
export const Icon_Active = '#101010';
export const Explore_Screen = 'exploreScreen';
export const Location_Screen = 'locationScreen';
export const Flex_Start = 'flex-start';
export const Add_New_Address_Screen = 'addNewAddressScreen';
export const Logged_In_Location_Screen = 'loggedInLocationScreen';
export const Address_Error = 'Please enter the address';
export const Save_As_Error = 'Please enter name of the address to be saved.';
export const Profile_Entities_Screen = 'profileEntitiesScreen';
export const Logout_Text = 'Are you sure you want to logout?';
export const Profile_Update_Details_Screen = 'profileUserUpdateScreen';
export const Profile_Saved_Addresses_Screen = 'profileSavedAddressesScreen';
export const Delivery_Description_Screen = 'deliveryDescriptionScreen';
export const EntitiesList = [
    {
        name: 'Monday',
        cartDescription: 'No meals in Cart',
        scheduleDescription: 'No orders scheduled'
    },
    {
        name: 'Tuesday',
        cartDescription: 'No meals in Cart',
        scheduleDescription: 'No orders scheduled'
    },
    {
        name: 'Wednesday',
        cartDescription: 'No meals in Cart',
        scheduleDescription: 'No orders scheduled'
    },
    {
        name: 'Thursday',
        cartDescription: 'No meals in Cart',
        scheduleDescription: 'No orders scheduled'
    },
    {
        name: 'Friday',
        cartDescription: 'No meals in Cart',
        scheduleDescription: 'No orders scheduled'
    }
];
export const Swaadam_SignIn_Form = [{
    label: 'Mobile Number',
    value: '',
    fieldName: 'mobileNumber',
    placeholder: '9999999999',
    type: 'textBox',
    keyboardType: 'number-pad',
    maxLength: 10
}];

export const Swaadam_New_Address_Form = [
    {
        label: 'Address',
        value: '',
        fieldName: 'address',
        placeholder: 'Street/House No.',
        type: 'textBox',
        keyboardType: 'default',
        maxLength: 10000
    },
    {
        label: 'Save as',
        value: '',
        fieldName: 'addressName',
        placeholder: 'home/office/other',
        type: 'textBox',
        keyboardType: 'default',
        maxLength: 10000
    },
]

export const Swaadam_Update_Details_Form = [
    {
        label: 'Name',
        value: '',
        fieldName: 'name',
        placeholder: '',
        type: 'textBox',
        keyboardType: 'default',
        maxLength: 10000
    },
    {
        label: 'Email',
        value: '',
        fieldName: 'email',
        placeholder: '',
        type: 'textBox',
        keyboardType: 'default',
        maxLength: 10000
    }
]

export const profileEntitiesList = [
    {
        iconName: 'edit',
        entityName: 'Edit Profile',
        action: 'navigate'
    },
    {
        iconName: 'address-book-o',
        entityName: 'Saved Addresses',
        action: 'navigate'
    },
    {
        iconName: 'list-ul',
        entityName: 'Orders History',
        action: 'navigate'
    },
    {
        iconName: 'attach-money',
        entityName: 'Tinmen Credits',
        action: 'display'
    },
    {
        iconName: 'call',
        entityName: 'Call Support',
        action: 'none'
    },
    {
        iconName: 'email',
        entityName: 'Email Support',
        action: 'none'
    },
    {
        iconName: 'logout',
        entityName: 'Logout',
        action: 'none'
    }
]

export const optionsList = [
    {
        name: 'Lunch',
        iconName: 'football'
    },
    {
        name: 'Dinner',
        iconName: 'glass-wine'
    },
    {
        name: 'Veg',
        iconName: 'food-apple'
    },
    {
        name: 'Non Veg',
        iconName: 'food-fork-drink'
    },
    {
        name: 'Chefs',
        iconName: 'folder-multiple'
    }
]