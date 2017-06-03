// @flow
import React from 'react'
import { Box } from 'axs'
import { Flex } from 'axs-ui'
import { colors } from '../style'
import { replace } from 'lodash'

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
  <Flex
    alignItems="center"
    justifyContent="space-between"
    style={{ lineHeight: 0, maxWidth: 48 * 4 + 32 * 3 }}
    mt2
    {...props}
  >
    {phone && <Phone data={phone} />}
    {address && <Address data={address} />}
    {website && <Website data={website} />}
    {/* {email && <Email data={email} />} */}
    {twitter && <Twitter data={twitter} />}
    {/* {facebook && <Facebook data={facebook} />} */}
  </Flex>
)

export default Contact

const Item = ({
  href,
  label,
  icon,
  color,
  ...props
}: {
  href: string,
  label: string,
  icon: string,
  color: string
}) => (
  <Box
    is="a"
    href={href}
    target="_blank"
    aria-label={label}
    display="inline-block"
    css={{
      backgroundColor: color,
      backgroundImage: `url('https://icon.now.sh/${icon}/16/ffffff')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50%',
      backgroundPosition: 'center center',
      borderRadius: '50%',
      flexShrink: 0,
      width: 48,
      height: 48
    }}
  />
)

type DataType = { data: string }

const Twitter = ({ data }: DataType) => (
  <Item
    href={`https://twitter.com/${data}`}
    label="Twitter"
    icon="twitter"
    color="#1da1f2"
  />
)

/*
const Email = ({ data }: DataType) => (
  <Item
    href={`mailto:${data}`}
    label={`Email: ${data}`}
    icon="mail"
    color={colors.slate}
  />
)

const Facebook = ({ data }: DataType) => (
  <Item
    href={`https://facebook.com/${data}`}
    label="Facebook"
    icon="facebook"
    color="#3b5998"
  />
)

const Form = ({ data }: DataType) => (
  <Item href={contact} label="Contact" icon="edit" color={colors.red} />
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
    color={colors.orange}
  />
)

const Website = ({ data }: DataType) => (
  <Item href={data} label="Website" icon="explore" color={colors.blue} />
)

const Phone = ({ data }: DataType) => (
  <Item
    href={`tel:${replace(data, /\D/, '')}`}
    label={`Phone number: ${data}`}
    icon="phone"
    color={colors.purple}
  />
)
