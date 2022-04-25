import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Tag } from '#src/components/Tag';
import { Tags } from '#src/components/Tags';

const Separator = styled.div`
  height: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы, имеющие эту метку. Тэги можно использовать группами. Горизонтальные и вертикальные отступы
    между соседними тэгами равны 8px.
    <Separator />
    Для каждого тэга можно отдельно задать width, kind и onClick, либо можно задать единые width, kind и onClick через
    Tags. Dimension задается единый для всех тэгов в группе.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tags',
  decorators: [withDesign],
  component: Tags,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    kind: {
      options: ['neutral', 'blue', 'green', 'red', 'orange'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Tags>;

const Template1: ComponentStory<typeof Tags> = () => {
  return (
    <>
      <Tags
        dimension="m"
        width={50}
        kind="green"
        onClick={(event) => console.log(`click tag with id: ${event.currentTarget.id}`)}
      >
        <Tag id="1">Neutral</Tag>
        <Tag id="2" kind="green">
          Green
        </Tag>
        <Tag id="3" kind="blue">
          Blue
        </Tag>
        <Tag id="4" kind="red" width="auto" onClick={() => console.log('click red tag')}>
          Red
        </Tag>
        <Tag id="5" kind="orange">
          Orange
        </Tag>
      </Tags>
    </>
  );
};

export const TagStatus = Template1.bind({});
TagStatus.args = {};
TagStatus.storyName = 'Tags';
