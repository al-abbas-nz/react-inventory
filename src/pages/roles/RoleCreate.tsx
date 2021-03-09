import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from '../../components/Wrapper';
import { Permission } from '../../models/permission';

export const RoleCreate = () => {
  const [permissions, setPermissions] = useState([]);
  const [selected, setSelected] = useState([] as number[]);
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('permissions');
      setPermissions(data);
    })();
  }, []);

  const check = (id: number) => {
    //check if value exists in array
    //if value is in the array, delete value
    //if it isn't , add to array (that gets sent to API route)
    if (selected.some((s) => s === id)) {
      setSelected(selected.filter((s) => s !== id));
      return;
    }
    console.log(selected);
    setSelected([...selected, id]);
  };

  const submit = async (e: SyntheticEvent) => {
    // let selecteder = selected.join('","');
    // let arrSelecteder = new Array(selecteder);
    let selectedArray = new Array(selected.join('","'));
    e.preventDefault();
    await axios.post('roles', {
      name,
      permissions: selectedArray,
    });
    setRedirect(true);
    console.log(permissions);
  };

  if (redirect) {
    return <Redirect to={'/roles/'} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className='mb-3 mt-3 row'>
          <label className='col-sm-2 col-form-label'>Name</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className='mb-3 row'>
          <label className='col-sm-2 col-form-label'>Permissions</label>
          <div className='col-sm-10'>
            {permissions.map((p: Permission) => {
              return (
                <div className='form-check form-check-inline col-3' key={p.id}>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value={p.id}
                    onChange={() => check(p.id)}
                  />
                  <label className='form-check-label'>{p.name}</label>
                </div>
              );
            })}
          </div>
        </div>
        <button className='btn btn-outline-secondary'>Save</button>
      </form>
    </Wrapper>
  );
};
