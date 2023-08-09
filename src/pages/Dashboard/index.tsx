import ButtonComponents from '../../components/global/Buttons';
import { Input } from '../../style/input';

export const DashboardPage = () => {
  return (
    <>
      <Input withBackground='yes' placeholder='Digite seu texto' />
      <ButtonComponents $size='large' text='Text Button' $type='outlineLight' />
    </>
  );
};
