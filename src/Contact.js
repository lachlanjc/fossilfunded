// @flow
import React from 'react'
import { Circle, Box, Flex, Link } from 'rebass'
import { colors } from '../style'
import { replace } from 'lodash'

const Base = Flex.extend.attrs({
  align: 'center',
  justify: 'space-between',
  mt: 2
})`
  line-height: 0;
`

const Contact = ({
  phone,
  address,
  website,
  // email,
  twitter,
  // facebook,
  ...props
}: {
  phone: string,
  address: string,
  website: string,
  // email: string,
  twitter: string
  // facebook: string
}) => (
  <Base mx={-1} {...props}>
    {phone && <Phone data={phone} />}
    {address && <Address data={address} />}
    {website && <Website data={website} />}
    {/* {email && <Email data={email} />} */}
    {twitter && <Twitter data={twitter} />}
    {/* {facebook && <Facebook data={facebook} />} */}
  </Base>
)

export default Contact

const ItemLink = Circle.extend.attrs({ is: 'a', size: 48, mx: [1, 2] })`
  display: inline-block;
  background-image: url(https://icon.now.sh/${props => props.icon}/16/ffffff);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  flex-shrink: 0;
`

const Item = ({
  href,
  label,
  icon,
  bg = colors.purple,
  ...props
}: {
  href: string,
  label: string,
  icon: string,
  bg: string
}) => (
  <ItemLink
    href={href}
    target="_blank"
    aria-label={label}
    icon={icon}
    bg={bg}
  />
)

type DataType = { data: string }

const Twitter = ({ data }: DataType) => (
  <Item
    href={`https://twitter.com/${data}`}
    label="Twitter"
    icon="twitter"
    bg="#1da1f2"
  />
)

/*
const Email = ({ data }: DataType) => (
  <Item
    href={`mailto:${data}`}
    label={`Email: ${data}`}
    icon="mail"
    bg={colors.slate}
  />
)

const Facebook = ({ data }: DataType) => (
  <Item
    href={`https://facebook.com/${data}`}
    label="Facebook"
    icon="facebook"
    bg="#3b5998"
  />
)

const Form = ({ data }: DataType) => (
  <Item href={contact} label="Contact" icon="edit" bg={colors.red} />
)
*/

const Address = ({ data }: DataType) => (
  <Item
    href={
      `https://www.google.com/maps/place/` +
      replace(replace(data, /\s+/, '+'), ';', ',')
    }
    label="Address"
    icon="person_pin"
    bg={colors.orange}
  />
)

const Website = ({ data }: DataType) => (
  <Item href={data} label="Website" icon="explore" bg={colors.blue} />
)

const Phone = ({ data }: DataType) => (
  <Item
    href={`tel:${replace(data, /\D/, '')}`}
    label={`Phone number: ${data}`}
    icon="phone"
    bg={colors.purple}
  />
)
