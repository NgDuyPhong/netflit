import React from 'react';
import { Space, Table, Tag } from 'antd';
import { dataFull } from './mock';

const { Column, ColumnGroup } = Table;

const data = dataFull();

const AccessibleTable = () => (
  <Table dataSource={data} pagination={{ pageSize: 250 }}>
    <ColumnGroup title='Name'>
      <Column title='First Name' dataIndex='firstName' key='firstName' />
      <ColumnGroup title='Last Name' dataIndex='lastName' key='lastName' />
    </ColumnGroup>
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags'
      dataIndex='tags'
      key='tags'
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title='Action'
      key='action'
      render={(_, record) => (
        <Space size='middle'>
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default AccessibleTable;
