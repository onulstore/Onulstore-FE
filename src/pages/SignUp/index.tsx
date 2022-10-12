import SignUpForm from 'components/user/SignUpForm';
import SetHeaderBar from 'utils/HOC/SetHeaderBar';

function SignUp() {
  return (
    <div>
      <SignUpForm />
    </div>
  );
}

export default SetHeaderBar(SignUp);
