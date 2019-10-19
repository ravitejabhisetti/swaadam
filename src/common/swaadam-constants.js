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
export const Explore_Screen = 'Explore';
export const None = 'none';
export const Absolute = 'absolute';
export const Swaadam_SignIn_Form_Name = 'SwaadamSignInForm';
export const Swaadam_Update_Details_Form_Name = 'SwaadamUpdateDetailsForm';
export const Swaadam_SignIn_Submit_Button = 'REQUEST OTP';
export const Form_Item_Type_Text_Box = 'textBox';
export const Sign_In_Form = 'Sign In';
export const Transparent = 'transparent';
export const Swaadam_Profile_Screen = 'Profile';
export const Form_Button_Underlay_Color = '#C0C0C0';
export const Update_Button = 'Update';
export const Mobile_Number_Error = 'Please enter a valid 10 digit mobile number';
export const Submit_Cancel = 'Cancel';
export const Phone_Verification = 'Phone Verification';
export const Method_Get = 'GET';
export const Method_Post = 'POST';
export const Users_Url = 'https://swaadam-b825b.firebaseio.com/users.json';
export const Not_Found = 'Not Found';
export const Update_Details_Header = 'Update Details';
export const Name_Error = 'Please Enter a Valid Name';
export const Email_Error = 'Please Enter a Valid Email';
export const Api_Call_Headers = { "Content-Type": "application/json" };
export const Swaadam_SignIn_Form = [{
    label: 'Mobile Number',
    value: '',
    fieldName: 'mobileNumber',
    placeholder: '9999999999',
    type: 'textBox',
    keyboardType: 'number-pad',
    maxLength: 10
}];

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