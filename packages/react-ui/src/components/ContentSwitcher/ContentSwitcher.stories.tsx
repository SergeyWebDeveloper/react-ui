import React, { useState } from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ContentSwitcher } from '#src/components/ContentSwitcher';
import { ContentSwitcherItem } from '#src/components/ContentSwitcher/ContentSwitcherItem';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import { ReactComponent as HomeOutline } from '@admiral-ds/icons/build/system/HomeOutline.svg';
import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { T } from '#src/components/T';
import { Badge } from '#src/components/Badge';
import { TooltipHoc } from '#src/components/TooltipHOC';

const Divider = styled.div`
  width: 10px;
`;

const Separator = styled.div`
  height: 20px;
`;

export default {
  title: 'Admiral-2.1/ContentSwitcher',
  decorators: [withDesign],
  component: ContentSwitcher,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70132',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70157',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70180',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70203',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70226',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70249',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=7582%3A70273',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof ContentSwitcher>;

const MobileWrapper = styled.div`
  width: 320px;
  height: 100px;
  padding-top: 16px;
  box-sizing: border-box;
  border: ${(p) => `8px solid ${p.theme.color['Neutral/Neutral 50']}`};
  border-bottom-style: none;
  background-color: ${(p) => p.theme.color['Neutral/Neutral 00']};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const SwitcherWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentSwitcherDemo: ComponentStory<typeof ContentSwitcher> = () => {
  const list = [
    { title: 'Active button', content: '1' },
    { title: 'Default button', content: '2' },
    { title: 'Disabled button', content: '3', disabled: true },
  ];
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Dimension - l
      </T>
      <Separator />
      <ContentSwitcher dimension={'l'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - m
      </T>
      <Separator />
      <ContentSwitcher dimension={'m'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - s
      </T>
      <Separator />
      <ContentSwitcher dimension={'s'}>
        {list.map((item, index) => {
          return (
            <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
              {item.title}
            </ContentSwitcherItem>
          );
        })}
      </ContentSwitcher>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Mobile Adaptive
      </T>
      <MobileWrapper>
        <SwitcherWrapper>
          <ContentSwitcher dimension={'m'}>
            {list.map((item, index) => {
              return (
                <ContentSwitcherItem key={index} active={index === 0} disabled={item.disabled}>
                  {item.title}
                </ContentSwitcherItem>
              );
            })}
          </ContentSwitcher>
        </SwitcherWrapper>
      </MobileWrapper>
    </>
  );
};

const ContentSwitcherWithIconDemo: ComponentStory<typeof ContentSwitcher> = () => {
  return (
    <>
      <ContentSwitcher dimension={'l'}>
        <ContentSwitcherItem active>
          <StarSolid width={20} />
          <Divider />
          Active button
        </ContentSwitcherItem>
        <ContentSwitcherItem>
          <StarSolid width={20} />
          <Divider />
          Default button
        </ContentSwitcherItem>
        <ContentSwitcherItem disabled>
          Disabled button
          <Divider />
          <StarSolid width={17} />
        </ContentSwitcherItem>
      </ContentSwitcher>
    </>
  );
};

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
const ContentSwitcherItemWithTooltip = TooltipHoc(ContentSwitcherItem);

const ContentSwitcherIconOnlyDemo: ComponentStory<typeof ContentSwitcher> = () => {
  const [activeLPrimary, setActiveLPrimary] = useState(0);
  const [activeMPrimary, setActiveMPrimary] = useState(0);
  const [activeSPrimary, setActiveSPrimary] = useState(0);
  const [activeLSecondary, setActiveLSecondary] = useState(0);
  const [activeMSecondary, setActiveMSecondary] = useState(0);
  const [activeSSecondary, setActiveSSecondary] = useState(0);

  const list = [
    {
      title: <DeleteOutline width={20} />,
      tooltipText: 'Delete',
    },
    {
      title: <EmailOutline width={20} />,
      tooltipText: 'Email',
    },
    {
      title: <HomeOutline width={20} />,
      tooltipText: 'Home',
    },
    {
      title: <PrintOutline width={20} />,
      tooltipText: 'Print',
    },
  ];

  return (
    <>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Dimension - L
        </T>
        <ContentSwitcher dimension={'l'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeLPrimary}
              onClick={() => setActiveLPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'l'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeLSecondary}
              onClick={() => setActiveLSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <T font="Body/Body 1 Long" as="div">
          Dimension - M
        </T>
        <ContentSwitcher dimension={'m'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeMPrimary}
              onClick={() => setActiveMPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'m'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeMSecondary}
              onClick={() => setActiveMSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <T font="Body/Body 1 Long" as="div">
          Dimension - S
        </T>
        <ContentSwitcher dimension={'s'} appearance="primary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeSPrimary}
              onClick={() => setActiveSPrimary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
        <ContentSwitcher dimension={'s'} appearance="secondary">
          {list.map((item, index) => (
            <ContentSwitcherItemWithTooltip
              renderContent={() => item.tooltipText}
              key={index}
              active={index === activeSSecondary}
              onClick={() => setActiveSSecondary(index)}
            >
              {item.title}
            </ContentSwitcherItemWithTooltip>
          ))}
        </ContentSwitcher>
      </WrapperVertical>
    </>
  );
};

const ContentSwitcherWithBadgeDemo: ComponentStory<typeof ContentSwitcher> = () => {
  const [active, setActive] = useState(0);

  const list = [
    {
      title: (
        <>
          Active button <Badge style={{ marginLeft: 8 }}>3</Badge>
        </>
      ),
    },
    {
      title: (
        <>
          Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
    },
    {
      title: (
        <>
          Disabled button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
      disabled: true,
    },
  ];

  return (
    <>
      <ContentSwitcher dimension={'l'} appearance="primary">
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
            disabled={item.disabled}
          >
            {item.title}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    </>
  );
};

const Template: ComponentStory<typeof ContentSwitcher> = ({ dimension, className, ...props }) => {
  const [active, setActive] = useState(0);

  const list = [
    {
      title: (
        <>
          <StarSolid width={17} style={{ marginRight: 8 }} />
          Active button
        </>
      ),
    },
    {
      title: (
        <>
          <StarSolid width={17} style={{ marginRight: 8 }} />
          Default button <Badge style={{ marginLeft: 8 }}>6</Badge>
        </>
      ),
    },
    { title: 'Disabled button', disabled: true },
  ];

  return (
    <>
      <ContentSwitcher dimension={dimension} className={className} {...props}>
        {list.map((item, index) => (
          <ContentSwitcherItem
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
            disabled={item.disabled}
          >
            {item.title}
          </ContentSwitcherItem>
        ))}
      </ContentSwitcher>
    </>
  );
};

export const Playground = Template.bind({});
Playground.storyName = 'ContentSwitcher. Playground';
Playground.args = {};

export const Example = ContentSwitcherDemo.bind({});
Example.storyName = 'Базовый пример';

export const ContentSwitcherWithIcon = ContentSwitcherWithIconDemo.bind({});
ContentSwitcherWithIcon.storyName = 'ContentSwitcher с иконками';

export const ContentSwitcherIconOnly = ContentSwitcherIconOnlyDemo.bind({});
ContentSwitcherIconOnly.storyName = 'ContentSwitcher только с иконками';

export const ContentSwitcherWithBadge = ContentSwitcherWithBadgeDemo.bind({});
ContentSwitcherWithBadge.storyName = 'ContentSwitcher с Badge';
