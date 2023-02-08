import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const monthFormat = 'MM';

const App = () => {
  return (
    <>
      <DatePicker
        defaultValue={dayjs('2015/01', monthFormat)}
        format={monthFormat}
        picker="month"
      />
    </>
  );
};

export default App;
