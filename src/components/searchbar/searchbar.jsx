/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from 'react-bootstrap';
import ReactSearchBox from 'react-search-box';

function MySearchbar() {
  const data = [
    {
      key: 1,
      value: 'Linkedin',
      url: 'https://www.linkedin.com/in/caelyb-lockett-788a16a8/',
    },
    {
      key: 2,
      value: 'Github',
      url: 'https://github.com/Caelyb/template',
    },
    {
      key: 3,
      value: 'Players Handbook',
      url: 'https://www.dndbeyond.com/sources/phb',
    },
    {
      key: 4,
      value: 'Dungeon Masters Guide',
      url: 'https://www.dndbeyond.com/sources/dmg',
    },
    {
      key: 5,
      value: 'Monster Manual',
      url: 'https://www.dndbeyond.com/sources/mm',
    },
    {
      key: 6,
      value: 'Netflix',
      url: 'https://www.netflix.com/gb/',
    },
    {
      key: 7,
      value: 'Google',
      url: 'https://www.google.co.uk/',
    },
    {
      key: 8,
      value: 'React',
      url: 'https://legacy.reactjs.org/',
    },
  ];
  return (
    <body className="Body">
      <div style={{ width: '30rem' }}>
        <h1>Search Page</h1>
        <ReactSearchBox
          placeholder="Search Here..."
          data={data}
          onSelect={(record) => console.log(record)}
          onFocus={() => {
            console.log('--- New Search ---');
          }}
          onChange={(value) => console.log(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value=""
        />
        <Button onClick={null}> Search </Button>
        <ul>
          {' '}
          Top Searches:
          {data.map((aDataItem) => (
            <li>{aDataItem.value}</li>
          ))}
        </ul>
      </div>
    </body>
  );
}

export default MySearchbar;
