import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  EventDetail: {
    id: string;
  };
  Home: undefined;
  Login: undefined;
  TicketSelection: {
    id: string;
  };
  Menu: undefined;
  Wishlist: undefined;
  Booking: undefined;
  Account: undefined;
  Search: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;
