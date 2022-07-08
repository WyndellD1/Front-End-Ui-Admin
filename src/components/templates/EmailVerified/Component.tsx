import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';
import queryKeys from '../../../constants/queryKeys';
import { useAuthHooks } from '../../../hooks/auth';
import { useGlobalState } from '../../../hooks/global';
import { Button } from '../../atoms/Button';
import { EmailVerified } from '../../atoms/Icons';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerifiedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 488px;
  height: max-content;
`;

const VerifiedTitle = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 49px;
  padding: 0;
  margin: 0;
`;

const StyledVerifiedIcon = styled(EmailVerified)`
  margin-top: 64px;
`;

const RegisteredPrompt = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  padding: 0;
  margin: 0;
  margin-top: 26px;
`;

const RegisteredLabels = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  margin-top: 11px;
`;

const MyBoardBtnWrapper = styled.div`
  width: 150px;
  height: 35px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: ${theme.colors.secondary};

    :hover {
      background-color: ${theme.colors.primary02};
    }
  }
`;

export type Props = {};

const Component = ({}: Props): React.ReactElement => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url');

  const navigate = useNavigate();
  const { useCustomUrlRequest, useFetchUserDetails } = useAuthHooks();
  const { customUrlRequest } = useCustomUrlRequest();
  const { fetchUserDetails } = useFetchUserDetails();
  const {
    useCurrentUser: { currentUser, setCurrentUser },
  } = useGlobalState();

  const {} = useQuery(
    [queryKeys.EMAIL_VERIFICATION],
    () => {
      return customUrlRequest(String(url));
    },
    {
      enabled: !!url,
    },
  );

  const { mutate: getUserDetail } = useMutation(
    async () => fetchUserDetails(),
    {
      onSuccess: (res) => {
        if (res) {
          setCurrentUser({
            ...currentUser,
            user: {
              ...currentUser?.user,
              isVerified: !!res.email_verified_at,
              details: res,
            },
          });

          if (res.email_verified_at) {
            navigate('/set-profile', { state: { step: 1 } });
          }
        }
      },
    },
  );

  useEffect(() => {
    if (currentUser?.user.isVerified) {
      navigate('/about');
    }
  }, [currentUser?.user.isVerified]);

  const onPressHome = () => {
    getUserDetail();
  };

  return (
    <Container>
      <VerifiedWrapper>
        <VerifiedTitle>THANK YOU!</VerifiedTitle>
        <StyledVerifiedIcon />
        <RegisteredPrompt>Registration Complete</RegisteredPrompt>
        <RegisteredLabels>
          Email Address verification is complete.
        </RegisteredLabels>
        <MyBoardBtnWrapper>
          <StyledButton
            fullWidth
            type="contained"
            label="Home"
            onClick={onPressHome}
          />
        </MyBoardBtnWrapper>
      </VerifiedWrapper>
    </Container>
  );
};

export default Component;
