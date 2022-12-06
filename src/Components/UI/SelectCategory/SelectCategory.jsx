import React from 'react';
import { postStageEdit } from '../../../api/stage-edit';

const SelectCategory = ({
  defaultValue,
  zwiftId,
  stageId,
  setPopup,
  results,
  setResults,
  telegramId,
  password,
}) => {
  const color = {
    A: '#dc4119',
    B: '#58c34e',
    C: '#3ec0e9',
    W: '#9422ae',
    WA: '#9422ae',
    WB: '#9422ae',
  };

  const changeCategory = (e) => {
    const newCategory = e.target.value;

    let r = [];
    results.forEach((result) => {
      if (result.zwiftRiderId === zwiftId) result.category = newCategory;
      r.push(result);
    });
    setResults(r);

    postStageEdit(newCategory, zwiftId, stageId, telegramId, password).then((data) =>
      setPopup(data)
    );
  };

  return (
    <div>
      <select
        onChange={changeCategory}
        style={{ background: color[defaultValue] }}
        name="category"
        size="1"
        defaultValue={defaultValue}
      >
        <option style={{ background: color.A }} value="A" label="A" />
        <option style={{ background: color.B }} value="B" label="B" />
        <option style={{ background: color.C }} value="C" label="C" />
        <option style={{ background: color.W }} value="W" label="W" />
        <option style={{ background: color.W }} value="WA" label="WA" />
        <option style={{ background: color.W }} value="WB" label="WB" />
      </select>
    </div>
  );
};

export default SelectCategory;
