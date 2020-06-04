import React, { FunctionComponent } from 'react';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';
import { Country_item$key } from './__generated__/Country_item.graphql';
import { Link } from 'react-router-dom';

type Props = {
    country: Country_item$key;
};

const CountryFragment = graphql`
    fragment Country_item on Country {
        code
        name
        emoji
        capital
    }
`;

export const Country: FunctionComponent<Props> = (props) => {
    const { code, name, emoji, capital } = useFragment<Country_item$key>(CountryFragment, props.country);

    return (
        <div>
            <Link to={`/countries/${code.toLowerCase()}`}>{emoji}</Link> <strong>{name}</strong> <i>{capital}</i>
        </div>
    );
};
