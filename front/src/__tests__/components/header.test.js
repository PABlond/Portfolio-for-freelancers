import React from "react"
import renderer from "react-test-renderer"
import { shallow, configure } from "enzyme"
import Header from "../../components/Header"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

const constactShallowCfg = () => {
  const props = {
    content: { n: "1" },
  }
  const enzymeWrapper = shallow(<Header {...props} />)
  return {
    props,
    enzymeWrapper,
  }
}

describe("Shallow rendered Contact", () => {
  it("should render match snapshot", () => {
    const { props } = constactShallowCfg()
    const component = renderer.create(<Header {...props} />)
    let tree = component.toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })
  it("should render contact as expected", () => {
    const { enzymeWrapper } = constactShallowCfg()
    expect(enzymeWrapper.find("h1").text()).toBe("")
    expect(enzymeWrapper.find('div').first().prop('id')).toBe('header')
  })
})
