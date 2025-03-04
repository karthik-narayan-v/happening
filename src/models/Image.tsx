import React from 'react';
import LogoSvg from '../assets/svg/logo.svg';
import SocialSvg from '../assets/svg/socio_icons.svg';
import BellSvg from '../assets/svg/bell.svg';
import HomeSvg from '../assets/svg/home.svg';
import AccountSvg from '../assets/svg/account.svg';
import SearchSvg from '../assets/svg/search.svg';
import HeartSvg from '../assets/svg/heart.svg';
import BookingSvg from '../assets/svg/booking.svg';
import LocationSvg from '../assets/svg/location.svg';
import CloseSvg from '../assets/svg/close.svg';
import ChevronLeftSvg from '../assets/svg/chevron_left.svg';
import ShareSvg from '../assets/svg/share.svg';
import FilledHeartSvg from '../assets/svg/filled_heart.svg';
import PlaySvg from '../assets/svg/play.svg';
import ThunderSvg from '../assets/svg/thunder.svg';
import TimeSvg from '../assets/svg/time_capsule.svg';
import UserSvg from '../assets/svg/user.svg';
import MusicSvg from '../assets/svg/music.svg';
import LanguageSvg from '../assets/svg/language.svg';
import CalendarSvg from '../assets/svg/calendar.svg';
import FilledLocationSvg from '../assets/svg/filled_location.svg';
import InfoSvg from '../assets/svg/info.svg';
import ParkingSvg from '../assets/svg/parking.svg';
import WheelChairSvg from '../assets/svg/wheelchair.svg';
import FoodSvg from '../assets/svg/food.svg';
import MapSvg from '../assets/svg/map.svg';
import SilverSvg from '../assets/svg/silver.svg';
import GoldSvg from '../assets/svg/gold.svg';
import PlatinumSvg from '../assets/svg/platinum.svg';
import PlusSvg from '../assets/svg/plus.svg';
import MinusSvg from '../assets/svg/minus.svg';
import RadioSelectedSvg from '../assets/svg/radio_selected.svg';
import RadioNotSelectedSvg from '../assets/svg/radio_notselected.svg';

export const SvgLogo = (width: string, height: string) => {
  return <LogoSvg width={width} height={height} testID="logoSvg" />;
};

export const SvgSocial = () => {
  return <SocialSvg width={'140px'} height={'40px'} testID="socioSvg" />;
};

export const SvgBell = () => {
  return <BellSvg testID="bellSvg" />;
};

export const SvgAccount = (color: any) => {
  return <AccountSvg width={'16px'} height={'18px'} color={color} testID="accountSvg" />;
};

export const SvgBooking = (color: any) => {
  return <BookingSvg width={'16px'} height={'18px'} color={color} testID="bookingSvg" />;
};

export const SvgHome = (color: any) => {
  return <HomeSvg width={'16px'} height={'18px'} color={color} testID="homeSvg" />;
};

export const SvgHeart = (color: any) => {
  return <HeartSvg width={'16px'} height={'18px'} color={color} testID="heartSvg" />;
};

export const SvgSearch = (color: any) => {
  return <SearchSvg width={'16px'} height={'18px'} color={color} testID="searchSvg" />;
};

export const SvgLocation = (width: string, height: string) => {
  return <LocationSvg width={width} height={height} testID="locationSvg" />;
};

export const SvgClose = () => {
  return <CloseSvg width={'14px'} height={'14px'} testID="closeSvg" />;
};

export const SvgChevronLeft = () => {
  return <ChevronLeftSvg testID="chevronLeftSvg" />;
};

export const SvgShare = () => {
  return <ShareSvg testID="shareSvg" />;
};

export const SvgFilledHeart = () => {
  return <FilledHeartSvg testID="filledHeartSvg" />;
};

export const SvgPlay = () => {
  return <PlaySvg testID="playSvg" />;
};

export const SvgThunder = () => {
  return <ThunderSvg testID="thunderSvg" />;
};

export const SvgTime = () => {
  return <TimeSvg testID="timeSvg" />;
};

export const SvgUser = () => {
  return <UserSvg testID="userSvg" />;
};

export const SvgMusic = () => {
  return <MusicSvg testID="musicSvg" />;
};

export const SvgLanguage = () => {
  return <LanguageSvg testID="languageSvg" />;
};

export const SvgCalendar = () => {
  return <CalendarSvg testID="calendarSvg" />;
};

export const SvgFilledLocation = () => {
  return <FilledLocationSvg testID="filledLocationSvg" />;
};

export const SvgInfo = () => {
  return <InfoSvg testID="infoSvg" />;
};

export const SvgParking = () => {
  return <ParkingSvg testID="parkingSvg" />;
};

export const SvgWheelChair = () => {
  return <WheelChairSvg testID="wheelchairSvg" />;
};

export const SvgFood = () => {
  return <FoodSvg testID="foodSvg" />;
};

export const SvgMap = () => {
  return <MapSvg testID="mapSvg" />;
};

export const SvgSilver = () => {
  return <SilverSvg testID="silverSvg" />;
};

export const SvgGold = () => {
  return <GoldSvg testID="goldSvg" />;
};

export const SvgPlatinum = () => {
  return <PlatinumSvg testID="platinumSvg" />;
};

export const SvgPlus = () => {
  return <PlusSvg testID="plusSvg" />;
};

export const SvgMinus = () => {
  return <MinusSvg testID="minusSvg" />;
};

export const SvgRadioSelected = () => {
  return <RadioSelectedSvg testID="radioSelectedSvg" />;
};

export const SvgRadioNotSelected = () => {
  return <RadioNotSelectedSvg testID="radioNotSelectedSvg" />;
};
