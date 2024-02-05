import React from 'react'
import FlexRow from '../FlexRow'
import FlexColumn from '../FlexColumn'
import Button from '../Button'
import Text from '../Text'
import Icon from '../Icon'
import { Tab } from '../../shared/types'

type Tab = {
  label: string
  value: any
  onSelect: Function
  // icon name
  icon?: string
}

type Props = {
  tabs: Tab[]
  value: any
  onChange: (tab: Tab) => any
}

export default function TabBar(props: Props & Record<string, any>) {
  const { tabs, value, onChange } = props

  return (
    <FlexRow alignItems="center" color={styleProps?.color || 'background.0'} {...props}>
      {tabs.map((tab, index) => {
        const isLast = index === tabs.length - 1

        return (
          <FlexColumn
            key={tab.label}
            mr={isLast ? null : 'small'}
            borderBottom={tab.value === value ? 'solid' : null}
            borderColor={styleProps?.borderColor || 'background.0'}
            height="100%"
          >
            <Button
              kind="basic-transparent"
              height="100%"
              shape="block"
              onPress={() => onChange(tab)}
              color="inherit"
            >
              <FlexRow alignItems="center" justifyContent="center">
                {tab.icon && (
                  <Icon
                    name={tab.icon}
                    color={styleProps?.borderColor || 'background.0'}
                    mr="xsmall"
                  />
                )}
                <Text
                  color={
                    tab.value === value ? styleProps?.borderColor || 'background.0' : 'inherit'
                  }
                >
                  {tab.label}
                </Text>
              </FlexRow>
            </Button>
          </FlexColumn>
        )
      })}
    </FlexRow>
  )
}
